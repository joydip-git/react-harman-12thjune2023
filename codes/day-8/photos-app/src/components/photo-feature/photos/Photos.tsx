import { Component } from 'react'
import { Photo } from '../../../models/photo'
//import { records } from '../../../data/records'
import AlbumPhoto from '../album-photo/AlbumPhoto'
import { getPhotos } from '../../../services/photoservice'

type PhotosStateType = {
    photos: Photo[] | undefined,
    isFetchingCompleted: boolean,
    errorMessage: string
}
export default class Photos extends Component<{}, PhotosStateType> {

    constructor() {
        super({})
        console.log('Photos created')
    }
    //initialization of state
    state: Readonly<PhotosStateType> = {
        photos: undefined,
        isFetchingCompleted: false,
        errorMessage: ''
    }

    deletePhotoHandler = (photoId: number) => {
        if (this.state.photos) {
            const photocopies = [...this.state.photos]
            const index = photocopies.findIndex(p => p.id === photoId)
            if (index >= 0) {
                photocopies.splice(index, 1)
                this.setState({
                    photos: photocopies
                })
            }
        }
    }

    getData = async () => {
        try {
            const response = await getPhotos();
            if (response.status === 200) {
                const photoData = response.data
                this.setState({
                    photos: photoData,
                    isFetchingCompleted: true,
                    errorMessage: ''
                })
            } else {
                this.setState({
                    photos: undefined,
                    isFetchingCompleted: true,
                    errorMessage: response.statusText
                })
            }
        } catch (error: any) {
            this.setState({
                photos: undefined,
                isFetchingCompleted: true,
                errorMessage: error.message
            })
        }
    }

    render() {
        console.log('Photos rendered')
        const { photos, isFetchingCompleted, errorMessage } = this.state

        let design: any = ''

        if (!isFetchingCompleted) {
            design = <div>Pleas wait...loading data</div>
        } else if (errorMessage !== '') {
            design = <div>{errorMessage}</div>
        } else if (photos?.length === 0) {
            design = <div>No records</div>
        } else {
            design = (
                <div>
                    <h2>Photos:</h2>
                    <div>
                        {
                            photos?.map(
                                p => {
                                    return (
                                        <AlbumPhoto photoInfo={p} key={p.id} deleteHandler={this.deletePhotoHandler} />
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            )
        }
        // return <div>
        //     {design}
        //     <br />
        //     <button type='button' onClick={this.getData}>Load Data</button>
        // </div>
        return design
    }

    componentDidMount(): void {
        console.log('Photos mounted')
        setTimeout(
            () => {
                this.getData()
            },
            4000
        )
    }
    componentWillUnmount(): void {
        console.log('Photos unmounted')
    }
}
