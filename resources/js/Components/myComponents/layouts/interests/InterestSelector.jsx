function InterestSelector() {
    const [interestData, setInterestData] = useState([])
    const fetchInterestData = async () => {
        await axios.get(`http://127.0.0.1:8000/interest/search/?k=`).then(response => {
            if (response.data) {
                setInterestData(response.data)
            }
        })

    }



    useEffect(() => {
        fetchInterestData()
    }, [])


    return (
        <>
            <span className="inline-block">
                sth
            </span>
        </>
    );
}

export default InterestSelector;