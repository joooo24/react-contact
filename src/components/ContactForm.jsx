// MUI의 Box, Button, TextField 사용
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";
import "./ContactForm.css";

const ContactForm = () => {
  // useState로 이름/전화번호 상태 관리
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {addContact} = usePhoneBookStore()

  const handleAddContact = () => {
    if(!name.trim() || !phoneNumber.trim()) return
    addContact(name, phoneNumber)
    setName('')
    setPhoneNumber('')
  }
  return (
    // Box를 flex 컨테이너로 세로 배치, 중앙 정렬
    <Box className="contact-form" display="flex" flexDirection="column" alignItems="center" gap={2}>
      {/* 두 개의 TextField(이름, 전화번호)와 "추가" 버튼 */}
      {/* 각 입력 필드에 onChange 핸들러로 상태 업데이트 */}
      <TextField
        className="contact-form__name-input"
        id="name"
        label="이름"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        className="contact-form__phone-input"
        id="phone-number"
        label="전화번호"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button className="contact-form__submit-button" variant="contained" size="large" onClick={handleAddContact}>
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;