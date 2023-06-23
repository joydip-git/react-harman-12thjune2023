import { NextPage } from "next"
import { useRouter } from "next/router";

const EditProduct: NextPage = () => {
    const router = useRouter(); //useParams() => {id:1}
    const paramObj = router.query; //{id:1}
    const id = paramObj.id
    return <div>Edit details of Product#{id}</div>
}
export default EditProduct