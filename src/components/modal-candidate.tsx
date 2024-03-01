'use client';

import React from 'react';
import { Candidate } from '@/components/card-candidate';
import ModalResponsive, {
  ModalResponsiveFooter,
} from '@/components/commons/modal-responsive';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { FormControl, FormItem, FormMessage } from '@/components/ui/form';
import FieldLabel from '@/components/commons/field-label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

interface ModalCandidateProps extends React.HtmlHTMLAttributes<HTMLElement> {
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
  title: string;
  data: Candidate;
}

type FormValue = {
  nis: string;
  candidate_id: number;
};

const initialValues: FormValue = {
  nis: '',
  candidate_id: 0,
};

const schemaValidation = yup.object().shape({
  nis: yup.string().required('Harap masukan nis anda'),
  candidate_id: yup.string().required('Harap pilih candidate'),
});

export default function ModalCandidate({
  setOpenModal,
  openModal,
  title,
  data,
  ...props
}: ModalCandidateProps) {
  const [isVote, setIsVote] = React.useState(false);
  const { toast } = useToast();
  const [formValues, setFormValue] = React.useState(initialValues);

  const handleSubmit = async (value: FormValue) => {
    await fetch('/api/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nis: value.nis,
        candidate_id: value.candidate_id,
      }),
    })
      .then(async (res) => {
        if (res.status === 404) {
          toast({
            title: 'Error',
            description: 'NIS anda tidak terdaftar',
            variant: 'destructive',
          });
          return;
        }

        if (res.status === 400) {
          toast({
            title: 'Error',
            description: 'Anda sudah melakukan voting',
            variant: 'destructive',
          });
          return;
        }

        toast({
          title: 'Sukses',
          description: 'Terima kasih atas partisipasi anda',
          variant: 'default',
        });

        setIsVote(false);
        setOpenModal(false);
      })
      .catch((error) => {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      });
  };

  React.useEffect(() => {
    if (openModal && data) {
      setFormValue({
        nis: '',
        candidate_id: data.candidateId,
      });
    }
  }, [openModal, data]);

  return (
    <ModalResponsive
      className={cn('max-w-4xl', props.className)}
      title={title}
      openModal={openModal}
      setOpenModal={setOpenModal}
      isDisableOutside
    >
      {!isVote ? (
        <div className='p-3'>
          <p className='whitespace-pre-line'>{data?.description}</p>
        </div>
      ) : (
        <Formik
          initialValues={formValues}
          validationSchema={schemaValidation}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            errors,
            touched,
            values,
            handleBlur,
            handleChange,
          }) => (
            <Form onSubmit={handleSubmit} className='p-3' id='form-vote'>
              <FormItem className='grid gap-1'>
                <FieldLabel className='sr-only' label='NIS' isRequired />
                <FormControl>
                  <Input
                    id='nis'
                    name='nis'
                    placeholder='NIS'
                    className={cn('w-full', {
                      'border-red-500': errors.nis && touched.nis,
                    })}
                    value={values.nis}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FormControl>
                {errors.nis && touched.nis && (
                  <FormMessage>{errors.nis}</FormMessage>
                )}
              </FormItem>
            </Form>
          )}
        </Formik>
      )}
      <ModalResponsiveFooter>
        {!isVote ? (
          <Button onClick={() => setIsVote(true)}>Vote</Button>
        ) : (
          <Button type='submit' form='form-vote'>
            Simpan
          </Button>
        )}
      </ModalResponsiveFooter>
    </ModalResponsive>
  );
}
