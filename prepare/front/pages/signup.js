import React, { useState, useCallback, useMemo } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import AppLayout from "../components/AppLayout";
import useInput from '../hooks/useInput';

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    });

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(id, password, nickname);
    }, [password, passwordCheck, term]);

    const errorStyle = useMemo(() => ({
        color: 'red'
    }));
    const buttonMarginStyle = useMemo(() => ({
        marginTop: 10
    }));

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | Node Bird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br />
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호 체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <div style={errorStyle}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>모든 약관에 동의합니다.</Checkbox>
                    {termError && <div style={errorStyle}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div style={buttonMarginStyle}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    );
}

export default Signup;