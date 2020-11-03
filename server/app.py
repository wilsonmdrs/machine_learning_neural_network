#!/usr/bin/python3
# -*- coding: utf-8 -*-
import os

from flask import Flask, request, jsonify
from flask_cors import CORS
import weka.core.jvm as jvm
import arff

from src.controllers.NeuralNetwork import NeuralNetwork
from src.controllers.Features import Features

appVersion = '1.0.0.1'
app = Flask(__name__)




@app.route('/')
def index():
    return jsonify({'response': 'Aplicação Rodando'}), 200


@app.route('/classify/extract/sound/', methods=['POST'])
def extract_features():
    jvm.start()
    # carrega dados da requisição
    content = request.json
    # define o caminho para o som selecionado
    path = './src/sounds/test/' + content['file']
    # extrai as caracterísiticas e armazena
    features = Features.extract_feature_sound(path)
    # excluir a ultima posição = classe
    features.pop(6)
    # adiciona um valor para ultima posição para evitar incompatibilidade de registros
    features.append(0)
    # armazena os parametros passados na requisicao - learning rate e traning time
    settings = content['settings']
    # armazena o resultado da classificação
    classification = NeuralNetwork.perceptron_classifier(features, settings)
    # armazena todas as caracteristicas extraidas
    all_features = [
        {'title': "Zero Crossing", 'value': features[0]},
        {'title': "Spectral Centroid", 'value': features[1]},
        {'title': "Spectral Rolloff", 'value': features[2]},
        {'title': "Mel Spectrogram", 'value': features[3]},
        {'title': "MFCC", 'value': features[4]},
        {'title': "Chroma STFT", 'value': features[5]}]
    jvm.stop()
    # retorna o resultado da classificação e as características extraidas
    return jsonify({'result': classification, 'features': all_features, 'status': 200}), 200


@app.route('/train')
def train():
    # carregando a imagem
    data = []
    # Carregando a lista de Imagens
    sounds = os.listdir('./src/sounds/train/')
    del sounds[0]
    for audio in sounds:
        print(audio)
        data += [Features.extract_feature_sound('./src/sounds/train/' + audio)]
    # gerando arquivo .arrf
    attributes = [
        'zero_crossing',
        'spectral_centroid',
        'spectral_rolloff',
        'mel_spectrogram',
        'mfcc',
        'chromagram',
        'classe {Gato, Cachorro}'
    ]
    try:
        arff.dump('caracteristicas_sounds.arff', data,
                  relation="caracteristicas", names=attributes)
        return jsonify({'message': 'extracao realizada com sucesso'}), 200
    except NameError:
        print('error', NameError)
        return jsonify({'message': NameError}), 204


# if __name__ == '__main__':
#
#     app.run(port=5000, debug=True)
