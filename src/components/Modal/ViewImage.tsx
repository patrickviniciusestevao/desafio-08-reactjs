import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent
        mx="auto"
        mb="2.5rem"
        mt="2.5rem"
        w="auto"
        h="auto"
        maxW={['320px', '540px', '900px']}
        maxH={['360px', '440px', '600px']}
        bgColor="pGray.900"
      >
        <ModalBody p={0}>
          <Image
            src={imgUrl}
            alt="image"
            maxW={['320px', '540px', '900px']}
            maxH={['360px', '440px', '600px']}
          />
        </ModalBody>

        <ModalFooter justifyContent="start" py={2}>
          <Link
            isExternal
            href={imgUrl}
            fontSize="0.875rem"
            mr="auto"
            ml="10px"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
}
