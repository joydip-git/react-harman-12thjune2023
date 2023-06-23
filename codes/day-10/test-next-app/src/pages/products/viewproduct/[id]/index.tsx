import { NextPage } from "next"
import { useRouter } from "next/router";

const ViewProduct: NextPage = () => {
    const router = useRouter(); //useParams() => {id:1}
    const paramObj = router.query; //{id:1}
    const id = paramObj.id
    return <div>View details of Product#{id}</div>
}
export default ViewProduct