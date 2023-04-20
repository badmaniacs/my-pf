import { useState } from 'react';
import {
  Box,
  Card,
  Flex,
  Spacer,
  Button,
  Input,
  FormControl,
} from '@chakra-ui/react';
import { IComment } from '@/libs/type';
import commentApi from '@/libs/axios';

interface CommentviewProps {
  comment: IComment;
  filteredDeleteData: (id: string) => void;
}

const Commentview: React.FC<CommentviewProps> = ({
  comment,
  filteredDeleteData,
}) => {
  const [deleteMode, setDeleteMode] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const deleteHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputPassword = formData.get('password') as string;
    if (inputPassword !== comment.password) {
      setIsPasswordError(true);
      return;
    }
    const res = await commentApi.deleteComment(comment.id as string);
    if (res.status === 202) {
      setIsPasswordError(false);
      filteredDeleteData(comment.id as string);
    }
  };

  const deleteModeHandler = () => {
    setDeleteMode((prevState) => !prevState);
  };

  return (
    <Box>
      <Card mr="10px">
        <Flex flexDirection="column">
          <Flex>
            <Box p="5px" pb="1px">
              {comment.username}
            </Box>
            <Box p="5px" pt="10px" pb="1px" fontSize="0.7em">
              {comment.writedate}
            </Box>
            <Spacer />
            {deleteMode ? (
              <Box>
                <Flex>
                  <FormControl isInvalid={isPasswordError}>
                    <form onSubmit={deleteHandler}>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        size="xs"
                        placeholder="비밀번호"
                        maxLength={12}
                      />
                      <Button size="xs" type="submit">
                        삭제
                      </Button>
                      <Button size="xs" onClick={deleteModeHandler}>
                        취소
                      </Button>
                    </form>
                  </FormControl>
                </Flex>
              </Box>
            ) : (
              <Box>
                <Button size="xs" onClick={deleteModeHandler}>
                  X
                </Button>
              </Box>
            )}
          </Flex>
          <Box p="10px" borderTop="1px dashed">
            {comment.text}
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};

export default Commentview;
