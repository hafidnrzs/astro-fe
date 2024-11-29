import { usePostGenerate } from '@/api/generate/hooks/use-post-generate';
import type { TGenerateRequest } from '@/api/generate/type';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { TextGenerateEffect } from '@/components/ui/text-generate';
import { Authenticated } from '@/libs/entry-point/is-authenticated';
import type { FC, ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, Outlet } from 'react-router-dom';

export const GenerateLayout: FC = (): ReactElement => {
  const form = useForm<TGenerateRequest>();
  const { mutate, isPending } = usePostGenerate();

  return (
    <Authenticated>
      {isPending && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Spinner className="w-16 h-16" />
        </div>
      )}
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            mutate(data);
          })}
          className="w-full px-6 container mx-auto h-[calc(100svh-100px)]"
        >
          <div className="h-full flex flex-col justify-center pb-4 max-w-5xl mx-auto">
            <h1 className="mx-auto mb-6 text-3xl font-semibold">
              <TextGenerateEffect words="What kind of project idea would you like to create?" />
            </h1>
            <div className="flex flex-row w-full gap-2 mx-auto">
              <Outlet />
              <Button
                type="submit"
                className="mb-2 w-fit"
                variant="primary"
                size="sm"
                disabled={isPending}
              >
                {isPending ? 'Loading...' : 'Send'}
              </Button>
            </div>
            <span className="ms-3 mt-2">
              Prefer to fly solo?{' '}
              <Link
                to="/client/result"
                className="text-slate-600 font-medium hover:underline underline-offset-2"
              >
                Create your own idea here →
              </Link>
            </span>
          </div>
        </form>
      </FormProvider>
    </Authenticated>
  );
};
