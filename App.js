import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';
import { episodes } from './data';

const START_DATE = new Date('2026-02-05T00:00:00');
const TOTAL_DAYS = 365;

export default function App() {
  const [currentDay, setCurrentDay] = useState(1);
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    // Calculate current day
    const today = new Date();
    const diffTime = today - START_DATE;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const calculatedDay = Math.max(1, Math.min(TOTAL_DAYS, diffDays));
    setCurrentDay(calculatedDay);

    // Find episode data
    const foundEpisode = episodes.find(e => e.day === calculatedDay) || {
      title: `Day ${calculatedDay} Reading`,
      summary: "Continue your journey through the Catechism today. Focus on the readings assigned for this day.",
      attention: ["Listen with an open heart.", "Reflect on today's paragraphs."]
    };
    setEpisode(foundEpisode);
  }, []);

  const progress = (currentDay / TOTAL_DAYS) * 100;
  const daysLeft = TOTAL_DAYS - currentDay;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Catechism</Text>
          <Text style={styles.headerSubtitle}>IN A YEAR</Text>
        </View>

        <View style={styles.counterSection}>
          <Text style={styles.dayLabel}>Day</Text>
          <Text style={styles.dayValue}>{currentDay}</Text>
          
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
          </View>
          
          <View style={styles.statsRow}>
            <Text style={styles.statText}>{progress.toFixed(1)}% Complete</Text>
            <Text style={styles.statTextHighlight}>{daysLeft} days left</Text>
          </View>
        </View>

        <View style={styles.contentSection}>
          <Text style={styles.episodeTitle}>{episode?.title}</Text>
          
          {episode?.paragraphs && (
            <View style={styles.paragraphsContainer}>
              <Text style={styles.paragraphsLabel}>Paragraphs</Text>
              <Text style={styles.paragraphsText}>{episode.paragraphs}</Text>
            </View>
          )}

          <View style={styles.contentGroup}>
            <Text style={styles.sectionHeading}>Summary</Text>
            <Text style={styles.bodyText}>{episode?.summary}</Text>
          </View>

          <View style={styles.contentGroup}>
            <Text style={styles.sectionHeading}>Focus Points</Text>
            {episode?.attention.map((point, index) => (
              <View key={index} style={styles.listRow}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bodyText}>{point}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  scrollContent: {
    padding: 24,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 48,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    fontWeight: '300',
    color: '#1A1A1A',
  },
  headerSubtitle: {
    fontSize: 14,
    letterSpacing: 4,
    color: '#999',
    marginTop: -8,
  },
  counterSection: {
    marginBottom: 48,
  },
  dayLabel: {
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#999',
    textAlign: 'center',
  },
  dayValue: {
    fontSize: 96,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    color: '#1A1A1A',
    textAlign: 'center',
    marginTop: -10,
  },
  progressContainer: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 20,
  },
  progressBar: {
    height: 2,
    backgroundColor: '#B45309',
    position: 'absolute',
    top: -0.5,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statText: {
    fontSize: 12,
    color: '#999',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },
  statTextHighlight: {
    fontSize: 12,
    color: '#B45309',
    fontWeight: '600',
  },
  contentSection: {
    marginBottom: 48,
  },
  episodeTitle: {
    fontSize: 28,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    color: '#1A1A1A',
    marginBottom: 12,
    fontStyle: 'italic',
  },
  paragraphsContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 24,
  },
  paragraphsLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#B45309',
    fontWeight: '700',
    marginRight: 8,
  },
  paragraphsText: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#B45309',
    fontWeight: '700',
  },
  contentGroup: {
    marginBottom: 24,
  },
  sectionHeading: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: '#999',
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },
  listRow: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingRight: 10,
  },
  bullet: {
    fontSize: 16,
    color: '#B45309',
    marginRight: 8,
  },
});
