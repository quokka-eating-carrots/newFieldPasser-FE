import { privateApi } from './Instance'

// 게시글 작성
export const requestWrite = async (formData: FormData) => {
  try {
    const response = await privateApi('/board/register', {
      method: 'POST',
      headers: {
        'content-type': 'multipart/form-data',
      },
      data: formData,
    })
    console.log(response)
    if (response.data.state === 200) {
      return 200
    }
  } catch (error) {
    console.log(error)
  }
}

// 게시글 수정
export const requestEdit = async (formData: FormData, postId: number) => {
  try {
    const response = await privateApi(`/board/edit/${postId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'multipart/form-data',
      },
      data: formData,
    })
    console.log(response)
    if (response.data.state === 200) {
      return 200
    }
  } catch (error) {
    console.log(error)
  }
}

// 관리자 문의글 답변 등록
export const postAdmintQuestion = async (questionId: number, data: QuestionTypes) => {
  const response = await privateApi(`/admin/answer/register?questionId=${questionId}`, {
    method: 'POST',
    data,
  })
  return {
    status: response.status,
  }
}

// 문의글 등록
export const postQuestion = async (data: QuestionPostType) => {
  const response = await privateApi.post('/question/register', {
    data,
  })
  return {
    status: response.status,
  }
}
