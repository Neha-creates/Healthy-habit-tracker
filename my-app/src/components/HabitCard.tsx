
import { Box, Card, CardBody, Text, Progress, Stack, Tag, Heading, HStack } from '@chakra-ui/react';
import { FaFire } from 'react-icons/fa';

interface HabitCardProps {
  name: string;
  category: string;
  goal: string;
  progress: number;
  streak: number;
}

const HabitCard = ({ name, category, goal, progress, streak }: HabitCardProps) => {
  return (
    <Card>
      <CardBody>
        <Stack spacing={4}>
          <Box>
            <Heading size="md" mb={2}>{name}</Heading>
            <HStack spacing={3}>
              <Tag colorScheme="purple">{category}</Tag>
              <Text fontSize="sm" color="gray.400">Goal: {goal}</Text>
            </HStack>
          </Box>
          
          <Progress
            value={progress}
            colorScheme="purple"
            borderRadius="full"
            size="sm"
            bgColor="darkBg.600"
          />
          
          <HStack spacing={2} color="orange.400">
            <FaFire />
            <Text fontSize="sm" fontWeight="bold">
              {streak} day streak
            </Text>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default HabitCard;
