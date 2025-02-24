import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function Home() {
  // Dummy blood sugar data (mg/dL) across different times
  const data = {
    labels: ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM'],
    datasets: [
      {
        data: [110, 130, 150, 140, 135, 145],
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blood Sugar Dashboard</Text>
      <LineChart
        data={data}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
      <View style={styles.thresholdContainer}>
        <View style={styles.lowerThreshold} />
        <Text style={styles.thresholdLabel}>Lower Threshold</Text>
      </View>
      <View style={styles.thresholdContainer}>
        <View style={styles.upperThreshold} />
        <Text style={styles.thresholdLabel}>Upper Threshold</Text>
      </View>
      <Text style={styles.currentText}>Current Blood Sugar: 135 mg/dL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  chart: {
    borderRadius: 16,
  },
  thresholdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  lowerThreshold: {
    width: 40,
    height: 4,
    backgroundColor: '#4CAF50',
    marginRight: 10,
  },
  upperThreshold: {
    width: 40,
    height: 4,
    backgroundColor: '#E91E63',
    marginRight: 10,
  },
  thresholdLabel: {
    fontSize: 14,
    color: '#555',
  },
  currentText: {
    fontSize: 18,
    color: '#333',
    marginTop: 20,
  },
});
