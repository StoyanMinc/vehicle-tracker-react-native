import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import CarIcon from '@assets/ill/car-ill.png';
import WheelIcon from '@assets/img/test-img.png';
import invalidTollIcon from '@assets/ic/toll-red-ic.png';
import validTollIcon from '@assets/ic/insurance-ic.png';


import { styles } from '@/assets/styles/settings.styles';
import { styles as carStyles } from '@assets/styles/car.styles';
import { useState } from 'react';

export default function Settings() {
    const [currentTab, setCurrentTab] = useState<'vignette' | 'insurance' | 'service'>('vignette')

    const renderCurrentTab = () => {
        switch (currentTab) {
            case 'vignette':
                return (
                    <>
                        <View style={styles.techContainer}>
                            <View style={styles.headerContainer}>
                                <View style={carStyles.container}>
                                    <View style={carStyles.kmContainer}>
                                        <View style={styles.notification}></View>
                                        <Image
                                            style={carStyles.carIcon}
                                            source={CarIcon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={carStyles.infoContainer}>
                                        <Text>Име на автомобил име на автомобил</Text>
                                        <View style={carStyles.statsContainer}>
                                            <Text style={carStyles.number}>РВ2219НА</Text>
                                            <TouchableOpacity style={carStyles.wheelIconContainer}>
                                                <Image
                                                    style={carStyles.wheelIcon}
                                                    source={WheelIcon}
                                                    resizeMode="contain"
                                                />
                                            </TouchableOpacity>
                                            <View style={[carStyles.yellowCard, { borderWidth: 0.5, borderColor: 'black' }]}></View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.statusText}>Общ статус</Text>
                                <View style={styles.tollContainer}>
                                    <Image
                                        source={invalidTollIcon}
                                    />
                                    <Text style={styles.invalid}>- Невалидна</Text>
                                </View>
                                <Text style={styles.statusText}>Начална дата</Text>
                                <Text style={styles.statusValuesText}>12.23.21</Text>
                                <Text style={styles.statusText}>Продължителност</Text>
                                <Text style={styles.statusValuesText}>1 година</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.deleteButton}>
                                    <Text style={styles.deleteButtonText}>Изтрий</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.updateButton, styles.updateButtonInvalid]}>
                                    <Text style={styles.deleteButtonText}>Поднови</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.techContainer}>
                            <View style={styles.headerContainer}>
                                <View style={carStyles.container}>
                                    <View style={carStyles.kmContainer}>
                                        <View style={styles.notification}></View>
                                        <Image
                                            style={carStyles.carIcon}
                                            source={CarIcon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={carStyles.infoContainer}>
                                        <Text>Име на автомобил име на автомобил</Text>
                                        <View style={carStyles.statsContainer}>
                                            <Text style={carStyles.number}>РВ2219НА</Text>
                                            <TouchableOpacity style={carStyles.wheelIconContainer}>
                                                <Image
                                                    style={carStyles.wheelIcon}
                                                    source={WheelIcon}
                                                    resizeMode="contain"
                                                />
                                            </TouchableOpacity>
                                            <View style={[carStyles.yellowCard, { borderWidth: 0.5, borderColor: 'black' }]}></View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.statusText}>Общ статус</Text>
                                <View style={styles.tollContainer}>
                                    <Image
                                        source={validTollIcon}
                                    />
                                    <Text style={styles.valid}>- Валидна</Text>
                                </View>
                                <Text style={styles.statusText}>Начална дата</Text>
                                <Text style={styles.statusValuesText}>12.23.21</Text>
                                <Text style={styles.statusText}>Продължителност</Text>
                                <Text style={styles.statusValuesText}>1 година</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.deleteButton}>
                                    <Text style={styles.deleteButtonText}>Изтрий</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.updateButton, styles.updateButtonValid]} disabled={true}>
                                    <Text style={styles.deleteButtonText}>Поднови</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                );
            case 'insurance':
                return (
                    <View>
                        <Text>insurance</Text>
                    </View>
                );
            case 'service':
                return (
                    <View>
                        <Text>service</Text>
                    </View>
                );
        }
    }

    return (
        <>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.container}
            >
                {renderCurrentTab()}

            </ScrollView>

            <View style={styles.tabBar}>
                <TouchableOpacity onPress={() => setCurrentTab('vignette')}>
                    <Text style={[styles.tabBarText, currentTab === 'vignette' && styles.activeTab]}>Винетки</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setCurrentTab('insurance')}>
                    <Text style={[styles.tabBarText, currentTab === 'insurance' && styles.activeTab]}>Застраховки</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setCurrentTab('service')}>
                    <Text style={[styles.tabBarText, currentTab === 'service' && styles.activeTab]}>Техническо обсл.</Text>
                </TouchableOpacity>
            </View >
        </>
    );
}