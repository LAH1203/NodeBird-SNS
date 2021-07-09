import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogout = useCallback(() => {
        alert('로그아웃합니다');
        setIsLoggedIn(false);
    }, []);
    
    return (
        <Card
            actions={[
                <div key="twit">짹짹<br />1</div>,
                <div key="followings">팔로잉<br />2</div>,
                <div key="followers">팔로워<br />3</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>AH</Avatar>}
                title="아현"
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
}

UserProfile.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
};

export default UserProfile;