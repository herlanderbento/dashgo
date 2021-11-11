import { Flex, Box, Text, Avatar} from '@chakra-ui/react'

export  function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Herlander Bento</Text>
        <Text color="gray.300" fontSize="small">
          herlanderbento19@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Herlander Bento" src="" />
    </Flex>
  );
}
