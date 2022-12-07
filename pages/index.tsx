import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
    Flex,
    Text,
    Box,
    List,
    ListItem,
    Link,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Navbar";
import { Check } from "../components/Check";
import { ExternalLinkIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Modal } from "../components/Modal";
import { GetStaticProps } from "next";

interface HomeProps {
    data: any;
}

export default function Home(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 550px)" });
    let fontSize = "";
    let width = "";

    if (isTabletOrMobile) {
        fontSize = "40px";
        width = "400px";
    } else {
        fontSize = "50px";
        width = "850px";
    }

    console.log(props);
    return (
        <Box
            backgroundColor={"#0B0E11"}
            maxWidth="100vw"
            px={"3vw"}
            width={width}
            mx={"auto"}
        >
            <Navbar />
            <Head>
                <title>Home</title>
            </Head>
            <Text mt={6} fontFamily={"Menlo"} className="pfr" fontSize={fontSize}>
                Hi, I{"'"}m Japroz Saini
            </Text>
            <Text mb={7} fontFamily="Inter" fontSize="18px" color="gray.300">
                i build cool shit{" "}
                <span style={{ opacity: 0.01 }}>0x6a6170726f7a</span>
            </Text>
            <Button onClick={onOpen} mb={2} fontFamily="body" variant="outline">
                Contact me
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} />
            <Text
                mt={4}
                mb={1}
                fontSize={0.6 * parseInt(fontSize)}
                fontFamily={"Menlo"}
                className={"pfr"}
            >
                Social Profiles
            </Text>
            <List mb={5} spacing={3}>
                <ListItem color={"#34D399"} fontFamily="Inter" fontSize="18px">
                    <Link
                        display="flex"
                        fontSize="19px"
                        width="20%"
                        fontWeight="600"
                        alignItems="center"
                        href="https://github.com/japrozs"
                        isExternal
                    >
                        Github
                        <ExternalLinkIcon mx={2} />
                    </Link>
                    <Link
                        display="flex"
                        fontSize="19px"
                        width="20%"
                        fontWeight="600"
                        alignItems="center"
                        href="https://twitter.com/japrozss"
                        isExternal
                    >
                        Twitter
                        <ExternalLinkIcon mx={2} />
                    </Link>
		    <Link
                        display="flex"
                        fontSize="19px"
                        width="20%"
                        fontWeight="600"
                        alignItems="center"
                        href="https://open.spotify.com/user/9bfb39ttvx3r31lkwf5907c6w?si=d4b1c9d57f124bff"
                        isExternal
                    >
                       Spotify 
                        <ExternalLinkIcon mx={2} />
                    </Link>
                    <Link
                        display="flex"
                        fontSize="19px"
                        width="20%"
                        fontWeight="600"
                        alignItems="center"
                        href="https://discord.gg/RUPjzFHsQK"
                        isExternal
                    >
                        Discord
                        <ExternalLinkIcon mx={2} />
                    </Link>
                    <Link
                        display="flex"
                        fontSize="19px"
                        width="20%"
                        fontWeight="600"
                        alignItems="center"
                        href="https://dev.to/japrozsaini"
                        isExternal
                    >
                        Dev.to
                        <ExternalLinkIcon mx={2} />
                    </Link>
                </ListItem>
            </List>
            {/*<Text
                mt={4}
                mb={1}
                fontSize={0.6 * parseInt(fontSize)}
                fontWeight={"700"}
                fontFamily={"Menlo"}
                className={"pfr"}
            >
                Technologies I{"'"}m proficient in
            </Text>
            <List mb={5} spacing={3}>
                <Check text="C, C++, TypeScript, Python" />
                <Check text="ANSI C, Full Stack Engineering, Docker" />
                <Check text="React, NextJS, React Native, GraphQL" />
                <Check text="PostgreSQL, Firebase, UI/UX design" />
            </List>
            */}<Flex justifyContent={"center"} alignItems={"center"} mt={20}>
                <Text
                    fontFamily={"Inter"}
                    mr={6}
                    color={"#5d7290"}
                    fontWeight={"medium"}
                >
                    &#169; Japroz Saini {new Date().getFullYear()}
                </Text>
                <Link
                    href="https://japrozsaini.statuspage.io"
                    style={{ textDecoration: "none" }}
                >
                    <Button>
                        <TriangleUpIcon mr={2} />
                        <Text fontFamily={"Inter"}>Status</Text>
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
}
