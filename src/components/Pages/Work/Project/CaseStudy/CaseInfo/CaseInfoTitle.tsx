import React from 'react'

type Props = {
    text: string;
}

export const CaseInfoTitle = ({ text }: Props) => {
    return (
        <div>
            {text}
        </div>
    )
}
