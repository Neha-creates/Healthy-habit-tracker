import {
  Box,
  Heading,
  VStack,
  Container,
  Checkbox,
  Button,
  Text,
  Stack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getHabits, setHabits } from '../hooks/useHabits';
import { useAuth } from '../context/AuthContext';

const suggestedHabits = [
  'Drink 8 glasses of water',
  'Walk 10,000 steps',
  'Read for 20 minutes',
  'Sleep 8 hours',
  'Meditate for 10 minutes',
  'Eat a healthy breakfast',
  'Limit screen time',
  'Practice gratitude',
];

const Dashboard = () => {
  const { currentUser: user } = useAuth();
  const [userHabits, setUserHabits] = useState<string[]>([]);
  const [selectedHabits, setSelectedHabits] = useState<string[]>([]);

  useEffect(() => {
    if (user?.uid) {
      getHabits(user.uid).then((data) => setUserHabits(data));
    }
  }, [user]);

  const handleHabitSelect = (habit: string) => {
    setSelectedHabits((prev) =>
      prev.includes(habit)
        ? prev.filter((h) => h !== habit)
        : [...prev, habit]
    );
  };

  const handleAddHabits = async () => {
    const updated = [...userHabits, ...selectedHabits.filter(h => !userHabits.includes(h))];
    setUserHabits(updated);
    setSelectedHabits([]);
    if (user?.uid) await setHabits(user.uid, updated);
  };

  const isFirstTime = userHabits.length === 0;

  return (
    <Box
  w="full"
  minH="100vh"
  position="relative"
  bg="#111217"
  pb={8}
  overflow="hidden"
  _before={{
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bgGradient: 'radial(circle at 50% 0%, purple.900, transparent 70%)',
    opacity: 0.1,
    pointerEvents: 'none',
  }}
>
  <Container
    maxW="1200px"
    py={8}
    position="relative"
    zIndex={1}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <VStack spacing={8} align="center" width="100%" justifyContent="center">
      
      {/* Clean heading - no box */}
      <Heading
        as="h1"
        size="2xl"
        mt={12}
        bgGradient="linear(to-r, purple.400, yellow.200)"
        bgClip="text"
        fontWeight="bold"
        textAlign="center"
      >
        Wellness Dashboard
      </Heading>

      <Box
        bg="rgba(22, 24, 29, 0.9)"
        rounded="xl"
        p={8}
        borderWidth="1px"
        borderColor="darkBg.600"
        backdropFilter="blur(12px)"
        boxShadow="dark-lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w="100%"
      >
        <Heading
          as="h2"
          size="md"
          mb={6}
          color="gray.200"
          fontWeight="medium"
          textAlign="center"
        >
          Your Habits
        </Heading>

        {isFirstTime ? (
          <>
            <Text color="gray.400" mb={4} textAlign="center">
              Choose some habits to get started:
            </Text>
            <Stack spacing={3} mb={4} align="center">
              {suggestedHabits.map((habit) => (
                <Checkbox
                  key={habit}
                  colorScheme="purple"
                  isChecked={selectedHabits.includes(habit)}
                  onChange={() => handleHabitSelect(habit)}
                >
                  {habit}
                </Checkbox>
              ))}
            </Stack>
            <Button
              colorScheme="purple"
              onClick={handleAddHabits}
              isDisabled={selectedHabits.length === 0}
              alignSelf="center"
            >
              Add Selected Habits
            </Button>
          </>
        ) : (
          <VStack align="center" spacing={3} w="100%">
            {userHabits.map((habit, idx) => (
              <Text key={idx} color="white" fontWeight="semibold" textAlign="center">
                • {habit}
              </Text>
            ))}
          </VStack>
        )}
      </Box>
    </VStack>
  </Container>
</Box>

  );
};

export default Dashboard;
