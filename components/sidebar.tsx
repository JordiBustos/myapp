import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/create-playlist",
  },
  {
    name: "Liked Songs",
    icon: MdFavorite,
    route: "/liked-songs",
  },
];

const playlist = new Array(30).fill(1).map((_, i) => `playlist ${i + 1}`);

const Sidebar = () => (
  <Box w="100%" h="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
    <Box paddingY="20px" h="100%">
      <Box width="120px" marginBottom="20px" paddingX="20px">
        <NextImage src="/logo.svg" width={120} height={60} />
      </Box>
      <Box marginBottom="20px">
        <List spacing={2}>
          {navMenu.map((menu) => (
            <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
              <LinkBox>
                <NextLink href={menu.route} passHref>
                  <LinkOverlay>
                    <ListIcon as={menu.icon} color="white" marginRight="20px" />
                    {menu.name}
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box marginTop="20px" marginBottom="20px">
        <List spacing={2}>
          {musicMenu.map((menu) => (
            <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
              <LinkBox>
                <NextLink href={menu.route} passHref>
                  <LinkOverlay>
                    <ListIcon as={menu.icon} color="white" marginRight="20px" />
                    {menu.name}
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider bg="gray.800" />
      <Box height="66%" overflowY="auto" paddingY="20px">
        <List spacing={2}>
          {playlist.map((song) => (
            <ListItem paddingX="20px" fontSize="16px" key={song}>
              <LinkBox>
                <NextLink href="/playlist" passHref>
                  <LinkOverlay>{song}</LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  </Box>
);

export default Sidebar;
