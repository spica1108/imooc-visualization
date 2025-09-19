import request from '@/utils/request';

export const getVisualization = () => {
  return request({
    url: '/visualization',
    method: 'get',
    //添加icode于header中以防获取接口时403
    headers: {
    icode: 'hellosunday'
    }
  });
}