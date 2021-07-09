import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import Link from 'next/Link';
import useInput from '../hooks/useInput';

// import styled from 'styled-components';

// styled-components를 사용하여 ButtonWrapper를 만드는데,
// div 태그에 style에는 marginTop으로 10px를 준다는 의미
// (2021-07-09) 첫 렌더링 시 제대로 적용되지 않아 useMemo로 대체함
/*
const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;
*/

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const buttonWrapStyle = useMemo(() => ({
        marginTop: '10px'
    }));
    const formWrapStyle = useMemo(() => ({
        padding: '10px'
    }));

    // onFinish는 자동으로 e.preventDefault가 적용됨
    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    return (
        <Form style={formWrapStyle} onFinish={onSubmitForm}>
            <div>
                <label htmlForm="user-id">아이디</label>
                <br />
                <Input
                    name="user-id"
                    value={id}
                    onChange={onChangeId}
                    required
                />
            </div>
            <div>
            <label htmlForm="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>
            <div style={buttonWrapStyle}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
            <div>

            </div>
        </Form>
    );
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;