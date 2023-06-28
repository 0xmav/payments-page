import Checkmark from "./Checkmark";

export default function PaymentCard(props) {
    return (
        <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{props.planName} plan</h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">{props.price}</span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/{props.renew}</span>
            </div>
            <ul role="list" className="space-y-1 mt-7">
                {props.list &&
                    props.list.map((item) => (
                        <li className="flex space-x-1">
                            <Checkmark key={item} item={item} />
                        </li>
                    ))}
            </ul>
        </div>
    );
}
