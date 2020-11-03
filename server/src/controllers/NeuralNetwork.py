#!/usr/bin/python3
# -*- coding: utf-8 -*-

from weka.core.converters import Loader
from weka.core.dataset import Instance, Instances
from weka.classifiers import Classifier, Evaluation
from weka.core.classes import Random

class NeuralNetwork:
    def __init__(self):
        pass

    @classmethod
    def perceptron_classifier(cls, features, settings):
        # carrega o dataset
        loader = Loader("weka.core.converters.ArffLoader")
        instancias = loader.load_file("./src/results/caracteristicas_sounds.arff")
        # sinaliza que o ultimo atributo é a classe
        instancias.class_is_last()
        # Define os Parametros
        learning_rate = str(settings['learningRate'])
        training_time = str(settings['trainingTime'])
        momentum = "0.2"
        hidden_layers = "a"
        seed = 2
        cross_validation = 20
        print('Learning Rate', learning_rate)
        print('Training Time', training_time)
        # Carrega o classificafor  Multilayer Perceptron de acordo com os parametros definidos
        classifier = Classifier(classname="weka.classifiers.functions.MultilayerPerceptron",
                                options=["-L", learning_rate, "-M", momentum, "-N", training_time, "-V", "0", "-S",
                                         str(seed), "-E", "20",
                                         "-H", hidden_layers])
        # Constroi o Classificador e Valida o dataset
        classifier.build_classifier(instancias)
        evaluation = Evaluation(instancias)
        # Aplica o Cross Validation
        rnd = Random(seed)
        rand_data = Instances.copy_instances(instancias)
        rand_data.randomize(rnd)
        if rand_data.class_attribute.is_nominal:
            rand_data.stratify(cross_validation)
        for i in range(cross_validation):
            # treina as instancias
            train = instancias.train_cv(cross_validation, i)
            # testa as instancias
            test = instancias.test_cv(cross_validation, i)

            # Constroi e Valida o Classificador
            cls = Classifier.make_copy(classifier)
            cls.build_classifier(train)
            evaluation.test_model(cls, test)
        # Cria uma nova instância com base nas caracteristicas extraidas
        new_instance = Instance.create_instance(features)
        # Adiciona a nova instância ao dataset
        instancias.add_instance(new_instance)
        # Liga a nova instancia ao dataset treinado com o classificador
        new_instance.dataset = train
        # Classifica a nova instância trazendo as probabilidades de ela pertencer as classes definidas
        classification = classifier.distribution_for_instance(new_instance)
        result = {'cat': round(classification[0] * 100, 2),
                  'dog': round(classification[1] * 100, 2)}
        print("=== Setup ===")
        print("Classifier: " + classifier.to_commandline())
        print("Dataset: " + instancias.relationname)
        print("Cross Validation: " + str(cross_validation) + "folds")
        print("Seed: " + str(seed))
        print("")
        print(evaluation.summary("=== " + str(cross_validation) + " -fold Cross-Validation ==="))
        print("Classificação", " - Gato: ", result['cat'], "  Cachorro: ",
              result['dog'])

        return result