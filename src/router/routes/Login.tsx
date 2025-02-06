import React from 'react';
import { Box, Fieldset, Flex, Input, Link, Text } from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Login = React.forwardRef<HTMLDivElement>(function Login(_, ref) {
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
            {t('forms.login.message')}
          </Fieldset.Legend>
        </Flex>
        <form
          style={{ display: 'grid', gap: '1rem' }}
          onSubmit={(event) => {
            event.preventDefault();
            console.log('event', event);
          }}
        >
          <Field label={t('forms.login.username.label')} errorText="Required">
            <Input placeholder={t('forms.login.username.placeholder')} />
          </Field>
          <Field label={t('forms.login.password.label')} errorText="Required">
            <Input
              name=""
              placeholder={t('forms.login.password.placeholder')}
            />
          </Field>
          <Text as="small" textStyle="xs">
            {t('forms.login.account.message')}
            {'  '}
            <Link
              href="/signin"
              variant="underline"
              color="brandGreen.200"
              textStyle="xs"
            >
              {t('forms.login.account.link')}
            </Link>
          </Text>
          <Button
            type="submit"
            transition="transform 0.2s"
            bg="brandBlack"
            color="brandWhite"
            _active={{ transform: 'scale(0.8)' }}
          >
            {t('forms.login.Submit')}
          </Button>
        </form>
      </Fieldset.Root>
    </Box>
  );
});

export default Login;
