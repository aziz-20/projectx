import PriseItem from "./PriseItem";
import "./css/priseItemlist.css";

function PriceList() {
    const items = [
        {
            header: {
                title: 'FREE',
                price: '0',
                description: ' mo',
            },
            content: [
                'Single User',
                '5GB Storage',
                'Unlimited Public Projects',
                'Community Access',
                'Unlimited Private Projects',
            ],
            btn: "Sign Up For Free"

        },
        {
            header: {
                title: 'FREE',
                price: '0',
                description: ' mo',
            },
            content: [
                'Single User',
                '5GB Storage',
                'Unlimited Public Projects',
                'Community Access',
                'Unlimited Private Projects',
            ],
            btn: "Sign Up For Free"

        },
        {
            header: {
                title: 'FREE',
                price: '0',
                description: ' mo',
            },
            content: [
                'Single User',
                '5GB Storage',
                'Unlimited Public Projects',
                'Community Access',
                'Unlimited Private Projects',
            ],
            btn: "Sign Up For Free"

        },
        {
            header: {
                title: 'FREE',
                price: '0',
                description: ' mo',
            },
            content: [
                'Single User',
                '5GB Storage',
                'Unlimited Public Projects',
                'Community Access',
                'Unlimited Private Projects',
            ],
            btn: "Sign Up For Free"

        },
        {
            header: {
                title: 'FREE',
                price: '0',
                description: ' mo',
            },
            content: [
                'Single User',
                '5GB Storage',
                'Unlimited Public Projects',
                'Community Access',
                'Unlimited Private Projects',
            ],
            btn: "Sign Up For Free"

        },
    ]
    const listItems = items.map((item,index) => {
       
        console.log(item.header)
        return <PriseItem key = {index} header = {item.header} content = {item.content} btn ={item.btn}/>
    });


    return (
        <div className="prise-list">
          {listItems}
        </div>
    );
}

export default PriceList;