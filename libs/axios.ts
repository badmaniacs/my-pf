import axios, { AxiosInstance } from 'axios';
import { IComment } from './type';

class CommentApi {
  private clinet: AxiosInstance;

  constructor() {
    this.clinet = axios.create({
      baseURL: 'http://localhost:3000',
    });
  }

  addComent(comment: IComment) {
    return this.clinet.post<IComment>('/api/comment', comment);
  }

  getComment(key?: string) {
    if (!key) {
      return this.clinet.get('/api/comment');
    }
    return this.clinet.get(`/api/comment?key=${key}`);
  }

  deleteComment(key: string) {
    return this.clinet.delete(`/api/comment?key=${key}`);
  }
}

const commentApi = new CommentApi();

export default commentApi;
