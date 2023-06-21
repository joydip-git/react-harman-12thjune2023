import { Photo } from '../../../models/photo'

type AlbumPhotoType = {
    photoInfo: Photo,
    deleteHandler: (id: number) => void
}

const AlbumPhoto = (props: AlbumPhotoType) => {

    const { photoInfo, deleteHandler } = props

    return (
        <div>
            <header>
                <img
                    src={photoInfo.thumbnailUrl}
                    alt="NA"
                />
            </header>
            <div>
                {photoInfo.title}
                <div>
                    <button
                        type="button">
                        Edit
                    </button>
                    &nbsp;&nbsp;
                    <button
                        type="button"
                        onClick={
                            () => { deleteHandler(photoInfo.id) }
                        }>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AlbumPhoto