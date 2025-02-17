import React from 'react';
import { Box, Fieldset, Flex, Input, Text, Link } from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const SignUp = React.forwardRef<HTMLDivElement>(function SignUp(_, ref) {
  const { t } = useTranslation();
  return (
    <Box
      as="main"
      ref={ref}
      background="brandWhite"
      w="100%"
      h="70dvh"
      display="grid"
      placeItems="center"
      color="brandBlack"
    >
      <Fieldset.Root display="flex" flexDirection="column" padding="2rem">
        <Flex direction="column">
          <Fieldset.Legend
            color="brandBlack"
            fontSize="5xl"
            fontFamily="Nighty"
            textAlign="center"
          >
            {t('forms.signUp.message')}
          </Fieldset.Legend>
        </Flex>
        <form
          style={{ display: 'grid', gap: '1rem' }}
          onSubmit={(event) => {
            event.preventDefault();
            console.log('event', event);
          }}
        >
          <Field label={t('forms.signUp.Username.label')} errorText="Required">
            <Input placeholder={t('forms.signUp.Username.placeholder')} />
          </Field>
          <Field label={t('forms.signUp.Email.label')} errorText="Required">
            <Input name="" placeholder={t('forms.signUp.Email.placeholder')} />
          </Field>
          <Field label={t('forms.signUp.Password.label')} errorText="Required">
            <Input
              name=""
              placeholder={t('forms.signUp.Password.placeholder')}
            />
          </Field>
          <Field
            label={t('forms.signUp.ConfirmPassword.label')}
            errorText="Required"
          >
            <Input
              name=""
              placeholder={t('forms.signUp.ConfirmPassword.placeholder')}
            />
          </Field>

          <Text as="small" textStyle="xs">
            {t('forms.signUp.account.message')}
            {'  '}
            <Link
              href="/login"
              variant="underline"
              color="brandGreen.200"
              textStyle="xs"
            >
              {t('forms.signUp.account.link')}
            </Link>
          </Text>
          <Button
            type="submit"
            transition="transform 0.2s"
            bg="brandBlack"
            color="brandWhite"
            _active={{ transform: 'scale(0.8)' }}
          >
            {t('forms.Submit.create')}
          </Button>
        </form>
      </Fieldset.Root>
    </Box>
  );
});

export default SignUp;
