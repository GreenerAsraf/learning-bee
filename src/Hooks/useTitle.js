import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Learning bee`;
    }, [title])
};

export default useTitle;