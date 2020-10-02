 <div className={openLogin ? 'login-form' : 'login-form-opened'}>
      <button type="button" className="login-form-close" onClick={closeLogin}>Fermer</button>
      <Form className="login-form-inputs" onSubmit={handleSubmit}>
        <Form.Input
          name="email"
          value={email}
          placeholder="Votre email"
          onChange={handleChange}
        />
        <Form.Input
          name="password"
          type="password"
          value={password}
          placeholder="Votre mot de passe"
          onChange={handleChange}
        />
        <Button type="submit" className="login-form-submit">Valider</Button>
      </Form>
    </div>