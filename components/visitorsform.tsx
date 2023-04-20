import { useState, useRef } from 'react';
import {
  Textarea,
  Box,
  Card,
  CardBody,
  FormControl,
  Input,
  Flex,
  Button,
  Spacer,
  FormErrorMessage,
} from '@chakra-ui/react';
import commentApi from '@/libs/axios';

interface VisitorsFormProps {
  getFirstPage: () => void;
}

const VisitorsForm: React.FC<VisitorsFormProps> = ({ getFirstPage }) => {
  const [isError, setIsError] = useState({
    nameError: false,
    passError: false,
    textError: false,
  });
  const ref = useRef<HTMLTextAreaElement>(null);

  const commentSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const comment = {
      username: formData.get('username') as string,
      password: formData.get('password') as string,
      text: formData.get('text') as string,
      writedate: new Date().toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
      }),
    };
    setIsError((prevState) => ({
      ...prevState,
      nameError: comment.username === '',
      passError: comment.password === '',
      textError: comment.text === '',
    }));
    if (!comment.password || !comment.text || !comment.username) {
      return;
    }
    const res = await commentApi.addComent(comment);
    if (res.status === 201) {
      if (ref.current !== null) {
        ref.current.value = '';
      }
      getFirstPage();
    }
  };

  return (
    <Box>
      <Card>
        <FormControl
          isInvalid={
            isError.nameError || isError.passError || isError.textError
          }
        >
          <CardBody padding="5px">
            <form onSubmit={commentSubmitHandler}>
              <Flex>
                <Flex flexDirection="column" gap="3px">
                  <Input
                    id="username"
                    name="username"
                    size="xs"
                    placeholder="이름"
                    maxLength={8}
                  />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    size="xs"
                    placeholder="비밀번호"
                    maxLength={12}
                  />
                </Flex>
                <Textarea
                  ref={ref}
                  id="text"
                  name="text"
                  placeholder="Add a comment..."
                  maxLength={45}
                />
              </Flex>
              <Flex pt="4px">
                <Spacer />
                <Button size="sm" colorScheme="teal" type="submit">
                  등록
                </Button>
              </Flex>
            </form>
          </CardBody>
          {isError.nameError && (
            <FormErrorMessage>이름을 입력해주세요.</FormErrorMessage>
          )}
          {isError.passError && (
            <FormErrorMessage>비밀번호를 입력해주세요.</FormErrorMessage>
          )}
          {isError.textError && (
            <FormErrorMessage>내용을 입력해주세요.</FormErrorMessage>
          )}
        </FormControl>
      </Card>
    </Box>
  );
};

export default VisitorsForm;
