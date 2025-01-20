import { Typography } from 'antd';
import chat from '../../assets/chat.svg';
const { Text } = Typography;

const Account = () => {
  return (
      <div className="flex-1 bg-primary text-white p-8 flex flex-col items-center justify-center">
          <img src={chat} alt="Login Icon" className='w-32 h-32 animate-bounce' />
          <h1 className="text-4xl font-bold mb-3 text-white">Chat Application</h1>
          <Text className="text-base text-center text-secondary">Welcome to the best chat experience</Text>
      </div>
  )
}

export default Account