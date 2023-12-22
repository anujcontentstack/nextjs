'use client'

import Image from 'next/image';

// const imageLoader = ({ src, width, quality }) => {
//     return `https://images.contentstack.io/v3/assets/bltb564490bc5201f31/blte3f202a35a967ea1/651c2d19a452a245cc8b4c35${src}?w=${width}&q=${quality || 75}`
// }

export default function Page() {

    return (
        <Image
            alt="The guitarist in the concert"
            src={`https://images.contentstack.io/v3/assets/blteae40eb499811073/bltc5064f36b5855343/59e0c41ac0eddd140d5a8e3e/owl.jpg?auto=webp`}
            width={1500}
            height={1500}
            quality={100}
            layout="responsive"
        />
    )
}