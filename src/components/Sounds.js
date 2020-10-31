import React from 'react'

const Sounds = {
    cats() {
        const cats = [   
            {file:"cats/cat_3.wav", path:require('../assets/sounds/test/cats/cat_3.wav')},
            {file:"cats/cat_14.wav", path:require('../assets/sounds/test/cats/cat_14.wav')},
            {file:"cats/cat_17.wav", path:require('../assets/sounds/test/cats/cat_17.wav')},
            {file:"cats/cat_20.wav", path:require('../assets/sounds/test/cats/cat_20.wav')},
            {file:"cats/cat_24.wav", path:require('../assets/sounds/test/cats/cat_24.wav')},
            {file:"cats/cat_28.wav", path:require('../assets/sounds/test/cats/cat_28.wav')},
            {file:"cats/cat_29.wav", path:require('../assets/sounds/test/cats/cat_29.wav')},
            {file:"cats/cat_36.wav", path:require('../assets/sounds/test/cats/cat_36.wav')},
            {file:"cats/cat_42.wav", path:require('../assets/sounds/test/cats/cat_42.wav')},
            {file:"cats/cat_55.wav", path:require('../assets/sounds/test/cats/cat_55.wav')},
            {file:"cats/cat_56.wav", path:require('../assets/sounds/test/cats/cat_56.wav')},
            {file:"cats/cat_57.wav", path:require('../assets/sounds/test/cats/cat_57.wav')},
            {file:"cats/cat_58.wav", path:require('../assets/sounds/test/cats/cat_58.wav')},
            {file:"cats/cat_59.wav", path:require('../assets/sounds/test/cats/cat_59.wav')},
            {file:"cats/cat_61.wav", path:require('../assets/sounds/test/cats/cat_61.wav')},
            {file:"cats/cat_66.wav", path:require('../assets/sounds/test/cats/cat_66.wav')},
            {file:"cats/cat_67.wav", path:require('../assets/sounds/test/cats/cat_67.wav')},
            {file:"cats/cat_75.wav", path:require('../assets/sounds/test/cats/cat_75.wav')},
            {file:"cats/cat_76.wav", path:require('../assets/sounds/test/cats/cat_76.wav')},
            {file:"cats/cat_79.wav", path:require('../assets/sounds/test/cats/cat_79.wav')},
            {file:"cats/cat_82.wav", path:require('../assets/sounds/test/cats/cat_82.wav')},
            {file:"cats/cat_85.wav", path:require('../assets/sounds/test/cats/cat_85.wav')},
            {file:"cats/cat_86.wav", path:require('../assets/sounds/test/cats/cat_86.wav')},
            {file:"cats/cat_88.wav", path:require('../assets/sounds/test/cats/cat_88.wav')},
            {file:"cats/cat_90.wav", path:require('../assets/sounds/test/cats/cat_90.wav')},
            {file:"cats/cat_110.wav", path:require('../assets/sounds/test/cats/cat_110.wav')},
            {file:"cats/cat_112.wav", path:require('../assets/sounds/test/cats/cat_112.wav')},
            {file:"cats/cat_115.wav", path:require('../assets/sounds/test/cats/cat_115.wav')},
            {file:"cats/cat_126.wav", path:require('../assets/sounds/test/cats/cat_126.wav')},
            {file:"cats/cat_129.wav", path:require('../assets/sounds/test/cats/cat_129.wav')},
            {file:"cats/cat_130.wav", path:require('../assets/sounds/test/cats/cat_130.wav')},
            {file:"cats/cat_133.wav", path:require('../assets/sounds/test/cats/cat_133.wav')},
            {file:"cats/cat_135.wav", path:require('../assets/sounds/test/cats/cat_135.wav')},
            {file:"cats/cat_137.wav", path:require('../assets/sounds/test/cats/cat_137.wav')},
            {file:"cats/cat_143.wav", path:require('../assets/sounds/test/cats/cat_143.wav')},
            {file:"cats/cat_144.wav", path:require('../assets/sounds/test/cats/cat_144.wav')},
            {file:"cats/cat_148.wav", path:require('../assets/sounds/test/cats/cat_148.wav')},
            {file:"cats/cat_152.wav", path:require('../assets/sounds/test/cats/cat_152.wav')},
            {file:"cats/cat_158.wav", path:require('../assets/sounds/test/cats/cat_158.wav')},
        ]
        return cats
    },
    dogs() {
        const dogs = [   
            {file:"dogs/dog_barking_3.wav", path:require('../assets/sounds/test/dogs/dog_barking_3.wav')},
            {file:"dogs/dog_barking_7.wav", path:require('../assets/sounds/test/dogs/dog_barking_7.wav')},
            {file:"dogs/dog_barking_8.wav", path:require('../assets/sounds/test/dogs/dog_barking_8.wav')},
            {file:"dogs/dog_barking_9.wav", path:require('../assets/sounds/test/dogs/dog_barking_9.wav')},
            {file:"dogs/dog_barking_12.wav", path:require('../assets/sounds/test/dogs/dog_barking_12.wav')},
            {file:"dogs/dog_barking_15.wav", path:require('../assets/sounds/test/dogs/dog_barking_15.wav')},
            {file:"dogs/dog_barking_19.wav", path:require('../assets/sounds/test/dogs/dog_barking_19.wav')},
            {file:"dogs/dog_barking_24.wav", path:require('../assets/sounds/test/dogs/dog_barking_24.wav')},
            {file:"dogs/dog_barking_34.wav", path:require('../assets/sounds/test/dogs/dog_barking_34.wav')},
            {file:"dogs/dog_barking_43.wav", path:require('../assets/sounds/test/dogs/dog_barking_43.wav')},
            {file:"dogs/dog_barking_44.wav", path:require('../assets/sounds/test/dogs/dog_barking_44.wav')},
            {file:"dogs/dog_barking_45.wav", path:require('../assets/sounds/test/dogs/dog_barking_45.wav')},
            {file:"dogs/dog_barking_46.wav", path:require('../assets/sounds/test/dogs/dog_barking_46.wav')},
            {file:"dogs/dog_barking_48.wav", path:require('../assets/sounds/test/dogs/dog_barking_48.wav')},
            {file:"dogs/dog_barking_49.wav", path:require('../assets/sounds/test/dogs/dog_barking_49.wav')},
            {file:"dogs/dog_barking_54.wav", path:require('../assets/sounds/test/dogs/dog_barking_54.wav')},
            {file:"dogs/dog_barking_59.wav", path:require('../assets/sounds/test/dogs/dog_barking_59.wav')},
            {file:"dogs/dog_barking_62.wav", path:require('../assets/sounds/test/dogs/dog_barking_62.wav')},
            {file:"dogs/dog_barking_64.wav", path:require('../assets/sounds/test/dogs/dog_barking_64.wav')},
            {file:"dogs/dog_barking_66.wav", path:require('../assets/sounds/test/dogs/dog_barking_66.wav')},
            {file:"dogs/dog_barking_73.wav", path:require('../assets/sounds/test/dogs/dog_barking_73.wav')},
            {file:"dogs/dog_barking_78.wav", path:require('../assets/sounds/test/dogs/dog_barking_78.wav')},
            {file:"dogs/dog_barking_82.wav", path:require('../assets/sounds/test/dogs/dog_barking_82.wav')},
            {file:"dogs/dog_barking_89.wav", path:require('../assets/sounds/test/dogs/dog_barking_89.wav')},
            {file:"dogs/dog_barking_90.wav", path:require('../assets/sounds/test/dogs/dog_barking_90.wav')},
            {file:"dogs/dog_barking_91.wav", path:require('../assets/sounds/test/dogs/dog_barking_91.wav')},
            {file:"dogs/dog_barking_99.wav", path:require('../assets/sounds/test/dogs/dog_barking_99.wav')},
            {file:"dogs/dog_barking_112.wav", path:require('../assets/sounds/test/dogs/dog_barking_112.wav')},
        ]
        return dogs
    }        
}

export default Sounds