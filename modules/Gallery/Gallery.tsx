import { ST } from 'next/dist/shared/lib/utils';
import * as Styled from './styles';

const Gallery = (props: any) => {
    const images = props?.moduleGallery?.imagesCollection?.items;

    if (!images) {
        return null;
    }

    if (images?.length < 1) {
        return null;
    }

    return (
        <Styled.Container>
            {images.map((image: any) => {
                return (
                    <Styled.ImageContainer>
                        <Styled.Image src={image?.url} width={image?.width} height={image?.height} />
                    </Styled.ImageContainer>
                );
            })}
        </Styled.Container>
    );
};

export default Gallery;
