import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface ErrorHandlerProps {
  title?: string;
  description?: string;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({
  title,
  description,
}: ErrorHandlerProps) => {
  return (
    <>
      <Text testID="title" style={styles.titleText}>
        {title}
      </Text>
      <Text testID="description" style={styles.descriptionText}>
        {description}
      </Text>
    </>
  );
};

export default ErrorHandler;
