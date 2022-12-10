import React from "react";
import { Button } from "@chakra-ui/button";
import {
    Modal as ModalEl,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Link,
} from "@chakra-ui/react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    return (
        <ModalEl isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent backgroundColor={"#0B0E11"}>
                <ModalHeader fontFamily={"body"}>Contact</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text fontFamily="Inter" fontSize="18px">
                        {/*For business enquiries, email me at{" "}*/}
                        <Link href="mailto:sainijaproz@gmail.com">
                            <span
                                style={{
                                    fontFamily: "menlo",
                                    color: "#4299e1",
                                }}
                            >
                                sainijaproz@gmail.com
                            </span>
                        </Link>
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button fontFamily={"body"} mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </ModalEl>
    );
};
