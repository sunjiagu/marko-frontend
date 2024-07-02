import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CommentCard = ({
  id,
  comment_content,
  author,
  createdAt,
  currentUserId,
  onDelete,
}) => {
  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
  };

  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={{ uri: author.image }}
          style={styles.authorImage}
        />
        <View style={styles.textContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.authorName}>{author.name}</Text>
            <Text style={styles.date}>{formatDate(createdAt)}</Text>
          </View>
          <Text style={styles.commentContent}>{comment_content}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingTop: 8,
    paddingBottom: 36,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  authorImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginTop: 2,
  },
  textContainer: {
    flex: 1,
    marginLeft: 4,
    marginTop: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  authorName: {
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  commentContent: {
    marginTop: 4,
  },
});

export default CommentCard;