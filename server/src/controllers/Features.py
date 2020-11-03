#!/usr/bin/python3
# -*- coding: utf-8 -*-

import librosa


class Features:
    def __init__(self):
        pass

    @classmethod
    def extract_feature_sound(cls,path):
        # Carrega o som
        x, sr = librosa.load(path)
        # Extrai a característica Zero Crossings e soma o resultado
        zero_crossing = sum(librosa.zero_crossings(x[9000:9100], pad=False))
        # Extrai a característica Spectral Centroid e soma o resultado
        spectral_centroids = sum(librosa.feature.spectral_centroid(x, sr=sr)[0])
        # Extrai a característica Spectral Rolloff e soma o resultado
        spectral_rolloff = sum(librosa.feature.spectral_rolloff(x + 0.01, sr=sr)[0])
        # Extrai a característica Mel Frequence - saida = array
        mel_spectrogram = librosa.feature.melspectrogram(x, sr=sr)
        # Soma os valores dos arrais em um unico valor e faz a média
        mel_spectrogram_count = 0
        for i in range(len(mel_spectrogram)):
            for j in range(len(mel_spectrogram[i])):
                mel_spectrogram_count = mel_spectrogram_count + \
                                        int(mel_spectrogram[i][j])
        mel_spectrogram_count = mel_spectrogram_count / len(mel_spectrogram)
        # Extrai a característica MFCC - saida = array
        mfcc = librosa.feature.mfcc(S=librosa.power_to_db(mel_spectrogram), sr=sr)
        # Soma os valores dos arrais em um unico valor e faz a média
        mfcc_count = 0
        for i in range(len(mfcc)):
            for j in range(len(mfcc[i])):
                mfcc_count = mfcc_count + int(mfcc[i][j])
        mfcc_count = mfcc_count / len(mfcc)
        # Extrai a característica Chroma STFT - saida = array
        chromagram = librosa.feature.chroma_stft(x, sr=sr, hop_length=512)
        # Soma os valores dos arrais em um unico valor e faz a média
        chromagram_count = 0
        for i in range(len(chromagram)):
            for j in range(len(chromagram[i])):
                chromagram_count = chromagram_count + int(chromagram[i][j])
        chromagram_count = chromagram_count / len(chromagram)

        # Segrega de quem é  a som
        character = "Gato"
        if path[20] == 'd':
            character = 'Cachorro'
        # Exibe o Caminho da Imagem no Console
        print('Caminho ', path)
        features = [int(zero_crossing), int(spectral_centroids), int(spectral_rolloff),
                    int(mel_spectrogram_count), int(mfcc_count), int(chromagram_count), str(character)]
        print('Características Extraidas', features)
        return features