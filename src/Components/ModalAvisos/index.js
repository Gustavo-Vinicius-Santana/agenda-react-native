import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, Modal, Pressable} from 'react-native';


import Styles from './Style';

export default function ModalAviso({modalVisivel, setModalVisivel, aviso}){

    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => setModalVisivel(false)}>
            <View style={Styles.viewModal}>
                <View style={Styles.viewContentModal}>
                    <View style={Styles.boxClose}>
                        <Pressable onPress={() => setModalVisivel(false)}>
                            <Ionicons name="close-outline" size={25} color="black"></Ionicons>
                        </Pressable>
                    </View>

                    <Text style={Styles.aviso}>{aviso}</Text>

                </View>
            </View>
        </Modal>
    )
}