import { BBSCard } from '@/app/components/BBSCard';
import { BBSPost } from '@/app/types/types';

export const BBSCardList = ({ bbsallData }: { bbsallData: BBSPost[] }) => {
    return (
        <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
            {bbsallData.map((post) => (
                <BBSCard key={post.id} post={post} />
            ))}
        </div>
    )
}
