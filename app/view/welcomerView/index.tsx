import React, { FC, useMemo } from 'react'
import { View, Text, Pressable, ImageBackground } from 'react-native'
import { images } from '../../assets/constants/urls';
import { language } from '../../assets/language';
import { DotsIcon } from '../../assets/svg/dotsIcon'
import { NextArrowIcon } from '../../assets/svg/nextArrowIcon';
import { getStyle } from './styles';

interface Props {
    navigation: any;
    route: any;
};


export const WelcomeView: FC<Props> = ({ navigation }) => {
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
                    <Pressable style={({ pressed }) => [{ ...styles.nextButton }, { opacity: pressed ? 0.7 : 1, }]} onPress={() => navigation.navigate('MainView')}>
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
