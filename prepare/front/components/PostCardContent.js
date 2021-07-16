import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

// 여기서 해시태그면 링크로, 텍스트면 그냥 텍스트로 구분하여 출력
// 정규표현식 사용
const PostCardContent = ({ postData }) => (
    <div>
        {postData.split(/(#[^\s#]+)/g).map((v, i) => {
            if (v.match(/(#[^\s#]+)/g)) {
                return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
            }
            return v;
        })}
    </div>
);

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired,
};

export default PostCardContent;