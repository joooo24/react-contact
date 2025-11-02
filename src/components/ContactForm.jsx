// MUI의 Box, Button, TextField 사용
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const ContactForm = () => {
  // useState로 이름/전화번호 상태 관리
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    // Box를 flex 컨테이너로 세로 배치, 중앙 정렬
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      {/* 두 개의 TextField(이름, 전화번호)와 "추가" 버튼 */}
      {/* 각 입력 필드에 onChange 핸들러로 상태 업데이트 */}
      <TextField
        id="name"
        label="이름"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="phone-number"
        label="전화번호"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button variant="contained" size="large">
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;