import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



const BillScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleLSMH}>
                <Text style={styles.textTitle}>Lịch sử mua hàng</Text>
            </View>
        </SafeAreaView>
    )
}

export default BillScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"

    },

    titleLSMH: {
        width: "100%",
        height: 50,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    textTitle: {
        fontSize: 20,
    }
})