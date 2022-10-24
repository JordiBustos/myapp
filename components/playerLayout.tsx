import { Box } from "@chakra-ui/react";
import Sidebar from "./sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box bg="gray.100" h="100vh" w="100vw">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px">{children}</Box>
      <Box position="absolute" left="0" bottom="0">
        player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
