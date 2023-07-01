import Image from "next/image";

export default function StripeCheckout() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-top">
            <div className="pt-12 pb-20 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <Image className="relative rounded-full dark:drop-shadow-[0_0_0.3rem_#ffffff70]" src="/cc-logo.jpg" alt="Collector's Corner Logo" width={120} height={37} priority />
                <p className="text-3xl font-semibold px-14">Collector's Corner Premium</p>
            </div>
            <h3 className="pb-8"> — Pay with Stripe — </h3>
            <div className="grid gap-2 text-left lg:grid-cols-3">
                <stripe-buy-button
                    buy-button-id="buy_btn_1NOMFfKUl3HVnxeOgizvNbO0"
                    publishable-key="pk_live_51N356kKUl3HVnxeO9ik0ek0MCMqi01lk5Qz299jsCb5PE70R4TRfPVH8hAOzEgsq7wbkZW5Zhj41R3xUdqW0wcCD00Tl44hp0Q"
                ></stripe-buy-button>
                <stripe-buy-button
                    buy-button-id="buy_btn_1NOM0KKUl3HVnxeOe7kk5eKn"
                    publishable-key="pk_live_51N356kKUl3HVnxeO9ik0ek0MCMqi01lk5Qz299jsCb5PE70R4TRfPVH8hAOzEgsq7wbkZW5Zhj41R3xUdqW0wcCD00Tl44hp0Q"
                ></stripe-buy-button>
                <stripe-buy-button
                    buy-button-id="buy_btn_1NOKP6KUl3HVnxeOq2xHiRhR"
                    publishable-key="pk_live_51N356kKUl3HVnxeO9ik0ek0MCMqi01lk5Qz299jsCb5PE70R4TRfPVH8hAOzEgsq7wbkZW5Zhj41R3xUdqW0wcCD00Tl44hp0Q"
                ></stripe-buy-button>
            </div>
        </main>
    );
}
