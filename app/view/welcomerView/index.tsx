import React, { useMemo } from 'react'
import { View, Text, Pressable, ImageBackground } from 'react-native'
import { images } from '../../assets/constants/urls';
import { language } from '../../assets/language';
import { DotsIcon } from '../../assets/svg/dotsIcon'
import { NextArrowIcon } from '../../assets/svg/nextArrowIcon';
import { getStyle } from './styles';

export const WelcomeView = () => {
    const styles = useMemo(() => getStyle(), []);
    const { welcomeText, getStarted } = language;

    return (
        <ImageBackground source={images.background} style={styles.image} resizeMode='stretch'>
            <View style={styles.container}>
                <View style={styles.mainWrapper}>
                    <DotsIcon />
                    <Text style={styles.welcome}>{welcomeText}</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <Pressable style={({ pressed }) => [{ ...styles.nextButton }, { opacity: pressed ? 0.7 : 1, }]}>
                        <Text style={styles.nextButtonText}>{getStarted}</Text>
                        <View style={styles.nextButtonArrow}>
                            <NextArrowIcon />
                        </View>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>

    )
}
