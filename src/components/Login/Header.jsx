import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient'


const Header = ({ HeadingTitle, HeadingText, Icon }) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#eff6ff", "#f0fdf4"]}
            style={styles.header}
        >
            <LinearGradient colors={["#007BFF", "#00C851"]} style={styles.iconBox}>
                {Icon}
            </LinearGradient>

            <Text style={styles.title}>{HeadingTitle}</Text>
            <Text style={styles.subtitle}>{HeadingText}</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        justifyContent: "center",
        // paddingBottom: 25,
        minHeight: 220, // ensures header gradient visible even in split view
    },


    iconBox: {
        width: 60,
        height: 60,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },

    title: {
        fontSize: 28,
        fontFamily: "Roboto-Bold",
        color: "#111",
    },

    subtitle: {
        fontSize: 14,
        fontFamily: "Roboto-Regular",
        color: "#555",
        marginTop: 5,
    },


})

export default Header
