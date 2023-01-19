import React from 'react'

type Props = {
    type: string;
    content: any;
}

export const CaseInfoOneColumn = ({ type, content }: Props) => {
    return (
        <>
            {type === "image" && <img src={content.imageUrl} alt={content.overlappedText} />}
            {content.imageUrl}
        </>
    )
}
