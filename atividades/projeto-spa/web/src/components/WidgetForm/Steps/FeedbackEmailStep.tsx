import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from './ScreenshotButton';
import { FormEvent, useState } from 'react';
import { ArrowLeft } from 'phosphor-react';

interface FeedbackEmailStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackEmailSent: () => void;
}

export function FeedbackEmailStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackEmailSent
}: FeedbackEmailStepProps) {
    const [email, setComment] = useState('');

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSubmitEmail(event: FormEvent) {
        event.preventDefault();

        console.log({
            email
        })

        onFeedbackEmailSent()
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2 select-none">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>

            <form onSubmit={handleSubmitEmail} className="my-4 w-full select-none">
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Digite seu e-mail"
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">
                    <button
                        type="submit"
                        disabled={email.length === 0}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Próximo
                    </button>
                </footer>
            </form>
        </>
    )
}